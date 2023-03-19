import { describe, expect } from "vitest";
import { MockRepository } from "../../../repositories/in-memory/in-memory";
import { GetProduct } from "./get-product";

describe("GetCategory should create", async () => {

    const mockRepository = new MockRepository();
    const get = new GetProduct(mockRepository);

    const result = await get.execute();

    expect(result).toBeDefined();
});
