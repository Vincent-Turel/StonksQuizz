const genErrorMsg = (attr, excepted, got) => {
    return (
        "Type validation failed for attribute `" +
        attr +
        "`: expected type `" +
        excepted +
        "` found type `" +
        got +
        "`"
    );
};

const assert = (data) => {
    return {
        data,

        withAttribute(attr) {
            this.attribute = attr;
            return this;
        },

        isType(t) {
            if (this.attribute != undefined) {
                if (typeof this.data[this.attribute] !== t) {
                    throw new Error(
                        genErrorMsg(
                            this.attribute,
                            t,
                            typeof this.data[this.attribute]
                        )
                    );
                }
            } else if (typeof data !== t) {
                throw new Error("Type validation failed");
            }
        },
    };
};

module.exports = { assert };
