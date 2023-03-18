import { expect, test } from "vitest";
import { CategoryInterface } from "../../../database/Model/Category/Category";
import { MockRepository } from "../../../repositories/in-memory-task/in-memory-task";
import { CreateCategory } from "./create-category";

test("CreateCategory should create a category", async () => {
    const category: CategoryInterface = {
        nome: "Test Category",
        descricao: "This is a test category",
    };

    const mockRepository = new MockRepository();
    const createCategory = new CreateCategory(mockRepository);

    const result = await createCategory.execute(category);

    expect(result).toBeDefined();
    expect(result.nome).toBe(category.nome);
    expect(result.descricao).toBe(category.descricao);
});
