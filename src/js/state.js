let currentPage = "home";

const listeners = [];

export function getCurrentPage() {

    return currentPage;

}

export function setPage(page) {

    if (currentPage === page) return;

    currentPage = page;

    listeners.forEach(listener => listener(page));

}

export function subscribe(listener) {

    listeners.push(listener);

}