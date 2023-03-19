import { describe, expect } from "vitest";
import { ProductInterface } from "../../../database/Model/Product/Product";
import { MockRepository } from "../../../repositories/in-memory/in-memory";
import { PutProduct } from "./put-product";

describe("PutProduct should create", async () => {

    const mockRepository = new MockRepository();
    const getCategory = new PutProduct(mockRepository);

    const product: ProductInterface = {
        nome: "Test Product",
        descricao: "This is a test product",
        id: 1
    };
    const result = await getCategory.execute(product);

    expect(result).toBeDefined();
});
