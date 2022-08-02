export class User {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public brightness: number,
        public contrast: number,
        public textSize: number,
        public clickTolerance: number,
        public clickConfirmation: boolean,
        public creationScore: number,
        public finishScore: number,
        public score: number
    ) {}
}
