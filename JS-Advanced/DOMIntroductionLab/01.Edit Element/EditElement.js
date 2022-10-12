function editElement(reference, match, replacer) {
    const content = reference.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer);
    reference.textContent=edited;
}