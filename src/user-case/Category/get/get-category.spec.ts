import { describe, expect } from "vitest";
import { MockRepository } from "../../../repositories/in-memory/in-memory";
import { GetCategory } from "./get-category";

describe("GetCategory should create a category", async () => {

    const mockRepository = new MockRepository();
    const getCategory = new GetCategory(mockRepository);

    const result = await getCategory.execute();

    expect(result).toBeDefined();
});
