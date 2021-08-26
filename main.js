 const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
	if(event.code === "Enter") {
		search();
	}
});
function search() {
	const input = searchInput.value;
	window.location.href = "https://www.google.com/search?q=" + input + "&sxsrf=ALeKk02rwTMqMjR8w1N1LDsOwpntmPhX7Q%3A1629970616477&source=hp&ei=uGAnYduUGsnwaOiPj9AH&iflsig=AINFCbYAAAAAYSduyF39J08AEFrM6TdNaxO_3d-pd-Wl&oq="+ input +"&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECc6BAgjECc6CAguEIAEELEDOggIABCABBCxAzoFCAAQgAQ6BQguEIAEOgsIABCABBCxAxCLA1DbFFiJQmDtSmgCcAB4AIABAIgBAJIBAJgBAKABAbABCrgBAg&sclient=gws-wiz&ved=0ahUKEwjb0Njcsc7yAhVJOBoKHejHA3oQ4dUDCAg&uact=5
	// body...
}