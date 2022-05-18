export function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export function getNumberPages(array, page_size) {
    return Math.ceil(array.length / page_size);
}

export function nextPageAvailable(array, page_size, page_number) {
    return paginate(array, page_size, page_number).length > 0;
}

export function previousPageAvailable(page_number) {
    return page_number > 1;
}
