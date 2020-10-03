export const toSlug = (title) => {
    return  title.toLowerCase().split(' ').join('-');


}