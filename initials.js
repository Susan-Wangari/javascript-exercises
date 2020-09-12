//returns initials of a name in uppercase
function getInitials(name) {
    let nameSplit = name.split(" ");
    let nameInitials = nameSplit[0].slice(0, 1).toUpperCase();
    if(nameSplit.length > 1) {
        nameInitials += nameSplit[nameSplit.length - 1].slice(0, 1).toUpperCase();
    }
    return nameInitials;
}
console.log(getInitials("Susan Wangari"));
