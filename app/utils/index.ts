import { ContactName, type Contact } from "~/models";

export const contactLabel = (c: Contact): string => {
    switch (c.name) {
        case ContactName.PHONE:
            return "Телефон";
        case ContactName.EMAIL:
            return "Email";
        default:
            throw new Error(`Unknown contact name: ${c.name}`);
    }
};

