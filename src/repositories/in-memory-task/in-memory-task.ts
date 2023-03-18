
export class MockRepository {
    async update(id: number, data: any): Promise<any> {
        return data;
    }
    async delete(id: number): Promise<number> {
        return 1;
    }

    public data: any[] = [];

    async create(data: any): Promise<any> {
        this.data.push(data);
        return data
    }

    async getAll(): Promise<any[]> {
        return this.data;
    }
    
}