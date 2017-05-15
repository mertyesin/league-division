interface OrderChangeRequested {
    tag: "ORDER_CHANGE_REQUESTED",
    newOrderBy: string
}

type Action = OrderChangeRequested;

export {
    OrderChangeRequested,
    Action
}