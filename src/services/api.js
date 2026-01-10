const API_BASE_URL = process.env.REACT_APP_API_URL || '';

class ApiClient {
  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  getToken() {
    return sessionStorage.getItem('axiondeep_portal_token');
  }

  async request(endpoint, options = {}) {
    const token = this.getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers,
    });

    if (response.status === 401) {
      // Token expired or invalid - clear session
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

  // Content endpoints
  async getContent(category = null, limit = 50) {
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (limit) params.append('limit', limit);
    const query = params.toString() ? `?${params.toString()}` : '';
    return this.request(`/api/content${query}`);
  }

  async getContentItem(id) {
    return this.request(`/api/content/${id}`);
  }

  async createContent(data) {
    return this.request('/api/content', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateContent(id, data) {
    return this.request(`/api/content/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteContent(id) {
    return this.request(`/api/content/${id}`, {
      method: 'DELETE',
    });
  }

  // Upload endpoint
  async getUploadUrl(contentId, fileName, fileType, fileSize) {
    return this.request('/api/upload', {
      method: 'POST',
      body: JSON.stringify({ contentId, fileName, fileType, fileSize }),
    });
  }
}

export const api = new ApiClient();
