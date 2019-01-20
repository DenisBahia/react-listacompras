export const Types = {
    START_UPDATE: "form.START_UPDATE",
    END_UPDATE: "form.END_UPDATE",
    START_ADD: "form.START_ADD",
    END_ADD: "form.END_ADD",
}

export const Creators = {
    startUpdate: (list, product) => ({
        type: Types.START_UPDATE,
        list,
        product
    }),
    endUpdate: () => ({
        type: Types.END_UPDATE
    }),
    startAdd: list => ({
        type: Types.START_ADD,
        list,
    }),
    endAdd: () => ({
        type: Types.END_ADD,
    }),
}