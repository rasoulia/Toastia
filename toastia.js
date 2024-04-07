class Toastia {
    options = {
        duration: 2000,
        timeout: 450,
        position: "topRight",
        positionClass: {
            topLeft: "toastia-top-left",
            topCenter: "toastia-top-center",
            topRight: "toastia-top-right",
            bottomLeft: "toastia-bottom-left",
            bottomCenter: "toastia-bottom-center",
            bottomRight: "toastia-bottom-right",
        },
        toast: document.querySelector(".toastia"),
        childItem: "li",
        placement: "afterbegin",
        typeClass: {
            info: "toastia-info",
            success: "toastia-success",
            warning: "toastia-warning",
            error: "toastia-error",
        },
        animateClass: {
            add: "toastia-fade-in",
            remove: "toastia-fade-out",
        },
    };

    duration = 0;

    constructor(options) {
        if (options) {
            this.options = {
                ...this.options,
                ...options,
                positionClass: {
                    ...this.options.positionClass,
                    ...options.positionClass,
                },
                typeClass:
                {
                    ...this.options.typeClass,
                    ...options.typeClass,
                },
                animateClass:
                {
                    ...this.options.animateClass,
                    ...options.animateClass,
                },
            };
        }

        if (!this.options.toast) {
            throw new Error("There is no container for toastia");
        }

        if (!this.options.positionClass.hasOwnProperty(this.options.position)) {
            throw new Error("Position not found in positionClass object");
        }

        this.options.toast.classList.add(this.options.positionClass[this.options.position]);

        this.duration = this.options.duration;
    }

    animateCSS(element, animation) {
        return new Promise((resolve, reject) => {
            element.classList.add(animation);

            function handleAnimationEnd(event) {
                event.stopPropagation();
                element.classList.remove(animation);
                resolve('Animation ended');
            }

            element.addEventListener('animationend', handleAnimationEnd, { once: true });
            element.addEventListener('animationcancel', handleAnimationEnd, { once: true });
        });
    };

    toast(text, type) {
        const { animateClass, toast, typeClass, timeout, placement, childItem } = this.options;

        if (toast.children.length === 0) {
            this.duration = this.options.duration;
        }

        const toasterItem = document.createElement(childItem);

        this.animateCSS(toasterItem, animateClass.add);

        toasterItem.insertAdjacentHTML("afterbegin", text);
        toasterItem.classList.add("toastia-item", typeClass[type] ?? "toastia-item");

        toast.insertAdjacentElement(placement, toasterItem);

        setTimeout(() => {
            this.animateCSS(toasterItem, animateClass.remove);

            setTimeout(() => {
                toast.removeChild(toasterItem);
            }, timeout);
        }, this.duration);

        this.duration += 500;
    }

    toastInfo(text) {
        this.toast(text, "info");
    }

    toastSuccess(text) {
        this.toast(text, "success");
    }

    toastWarning(text) {
        this.toast(text, "warning");
    }

    toastError(text) {
        this.toast(text, "error");
    }
}