export enum Params {
    Join = "Join",
    Contact = "Contact"

}
export function NavigateToYMCAMadaOrFomr(data:Params) {
    if(data == "Join")  window.location.href = "https://www.ymcamada.org/"
    else window.location.href = "https://script.google.com/macros/s/AKfycbwh-TY4ok0A5qmRM3b5SP9V9rEJU93zMWDl4dLcT8yp2EZaosywXGwUEFwv4uhKQ1-0/exec"
}
