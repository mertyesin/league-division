interface OrderChangeRequested {
    tag: "ORDER_CHANGE_REQUESTED",
    newOrderBy: string
}

interface TeamFixtureDisplayRequested {
    tag: "TEAM_FIXTURE_DISPLAY_REQUESTED",
    teamName: string
}

interface TableStatusChangeRequested {
    tag: "TABLE_STATUS_CHANGE_REQUESTED",
    newStatus: string
}

type Action = OrderChangeRequested | TeamFixtureDisplayRequested | TableStatusChangeRequested;

export {
    OrderChangeRequested,
    TeamFixtureDisplayRequested,
    TableStatusChangeRequested,
    Action
}