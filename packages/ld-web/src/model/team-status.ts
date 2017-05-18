interface TeamStatus {
    logoPath: string,
    name: string,
    played: number,
    win: number,
    drawn: number,
    lost: number,
    goalsFor: number,
    goalsAgainst: number,
    difference: number,
    points: number
}

export {
    TeamStatus
}