import { expect, test } from "vitest";
import { ProductInterface } from "../../../database/Model/Product/Product";
import { MockRepository } from "../../../repositories/in-memory-task/in-memory-task";
import { CreateProduct } from "./create-product";


test("CreateProduct should create", async () => {
    const product: ProductInterface = {
        nome: "Test Product",
        descricao: "This is a test product",
    };

    const mockRepository = new MockRepository();
    const create = new CreateProduct(mockRepository);

    const result = await create.execute(product);

    expect(result).toBeDefined();
    expect(result.nome).toBe(product.nome);
    expect(result.descricao).toBe(product.descricao);
});
