import { describe, expect } from "vitest";
import { ProductInterface } from "../../../database/Model/Product/Product";
import { MockRepository } from "../../../repositories/in-memory/in-memory";
import { PutCategory } from "./put-category";

describe("PutCategory should create a category", async () => {

    const mockRepository = new MockRepository();
    const getCategory = new PutCategory(mockRepository);

    const product: ProductInterface = {
        nome: "Test Product",
        descricao: "This is a test product",
        id: 1
    };
    const result = await getCategory.execute(product);

    expect(result).toBeDefined();
});
