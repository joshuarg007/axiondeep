const CONTENT_API_URL = process.env.REACT_APP_CONTENT_API_URL || '';

class ApiClient {
  getToken() {
    return sessionStorage.getItem('axiondeep_portal_token');
  }

  async request(url, options = {}) {
    const token = this.getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (response.status === 401) {
      sessionStorage.removeItem('axiondeep_portal_token');
      sessionStorage.removeItem('axiondeep_portal_role');
      window.location.href = '/portal/login';
      return;
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Request failed' }));
      throw new Error(error.message || `HTTP ${response.status}`);
    }

    if (response.status === 204) {
      return null;
    }

    return response.json();
  }

  // Content endpoints - all go to the content Lambda
  async getContent(category = null, limit = 50) {
    const params = new URLSearchParams({ action: 'list' });
    if (category) params.append('category', category);
    if (limit) params.append('limit', limit);
    return this.request(`${CONTENT_API_URL}?${params.toString()}`);
  }

  async getContentItem(id) {
    const params = new URLSearchParams({ action: 'get', id });
    return this.request(`${CONTENT_API_URL}?${params.toString()}`);
  }

  async createContent(data) {
    return this.request(CONTENT_API_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'create', ...data }),
    });
  }

  async updateContent(id, data) {
    return this.request(CONTENT_API_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'update', id, ...data }),
    });
  }

  async deleteContent(id) {
    return this.request(CONTENT_API_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'delete', id }),
    });
  }

  // Upload endpoint
  async getUploadUrl(contentId, fileName, fileType, fileSize) {
    return this.request(CONTENT_API_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'getUploadUrl', contentId, fileName, fileType, fileSize }),
    });
  }
}

export const api = new ApiClient();
