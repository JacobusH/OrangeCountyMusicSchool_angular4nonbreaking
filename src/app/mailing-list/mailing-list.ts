export class MailingList {

    constructor(
        public emailAddress: string,
        public firstName: string,
        public lastName: string,
        public phoneNumber: string,
        public instrument?: string
    )
    {}
}