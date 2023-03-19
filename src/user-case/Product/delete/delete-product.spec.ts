import { expect, test } from "vitest";
import { MockRepository } from "../../../repositories/in-memory/in-memory";
import { DeleteProduct } from "./delete-product";

test("DeleteProduct should create", async () => {

    const mockRepository = new MockRepository();
    const deleteProduct = new DeleteProduct(mockRepository);

    const result = await deleteProduct.execute(1);

    expect(result).toBeDefined();
});