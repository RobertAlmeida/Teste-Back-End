import { describe, expect } from "vitest";
import { MockRepository } from "../../../repositories/in-memory/in-memory";
import { DeleteCategory } from "./delete-category";

describe("DeleteCategory should create a category", async () => {

    const mockRepository = new MockRepository();
    const deleteCatgory = new DeleteCategory(mockRepository);

    const result = await deleteCatgory.execute(1);

    expect(result).toBeDefined();
});
