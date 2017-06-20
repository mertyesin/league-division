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

interface ViewChangeRequested {
    tag: "VIEW_CHANGE_REQUESTED",
    toViewName: string
}

interface ReloadRequested {
    tag: "RELOAD_REQUESTED"
}

type Action = OrderChangeRequested | TeamFixtureDisplayRequested | TableStatusChangeRequested | ViewChangeRequested | ReloadRequested;

export {
    OrderChangeRequested,
    TeamFixtureDisplayRequested,
    TableStatusChangeRequested,
    ViewChangeRequested,
    ReloadRequested,
    Action
}