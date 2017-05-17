interface OrderChangeRequested {
    tag: "ORDER_CHANGE_REQUESTED",
    newOrderBy: string
}

interface TeamFixtureDisplayRequested {
    tag: "TEAM_FIXTURE_DISPLAY_REQUESTED",
    teamName: string
}

type Action = OrderChangeRequested | TeamFixtureDisplayRequested;

export {
    OrderChangeRequested,
    TeamFixtureDisplayRequested,
    Action
}