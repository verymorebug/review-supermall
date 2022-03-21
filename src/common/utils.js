export function debounce(fns,delay = 20) {

    let timer = null;

    return function(){

        if (timer)
            clearTimeout(timer);
        else {

            this.timer = setTimeout(() => {

                fns.apply(this);

            }, delay)

        }
    }
}

