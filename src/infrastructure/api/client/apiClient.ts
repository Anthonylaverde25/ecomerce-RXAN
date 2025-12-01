// Mock API Client
// Simula llamadas HTTP a una API REST con delays reales

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

class MockApiClient {
  private baseDelay = 300; // ms
  private maxDelay = 800; // ms

  /**
   * Simula un delay de red aleatorio
   */
  private async simulateNetworkDelay(): Promise<void> {
    const delay = Math.random() * (this.maxDelay - this.baseDelay) + this.baseDelay;
    return new Promise((resolve) => setTimeout(resolve, delay));
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    await this.simulateNetworkDelay();
    
    console.log(`[Mock API] GET ${endpoint}`);
    
    // Aquí normalmente haríamos fetch(endpoint)
    // Por ahora, retornamos un objeto mock
    return {
      data: {} as T,
      status: 200,
    };
  }

  /**
   * POST request
   */
  async post<T, D = unknown>(endpoint: string, data: D): Promise<ApiResponse<T>> {
    await this.simulateNetworkDelay();
    
    console.log(`[Mock API] POST ${endpoint}`, data);
    
    return {
      data: {} as T,
      status: 201,
    };
  }

  /**
   * PUT request
   */
  async put<T, D = unknown>(endpoint: string, data: D): Promise<ApiResponse<T>> {
    await this.simulateNetworkDelay();
    
    console.log(`[Mock API] PUT ${endpoint}`, data);
    
    return {
      data: {} as T,
      status: 200,
    };
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    await this.simulateNetworkDelay();
    
    console.log(`[Mock API] DELETE ${endpoint}`);
    
    return {
      data: {} as T,
      status: 204,
    };
  }
}

// Singleton instance
export const apiClient = new MockApiClient();
