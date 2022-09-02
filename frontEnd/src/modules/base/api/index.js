import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:8080/',
  });
  
 function getGoogleFonts() {
	return axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=${process.env.VUE_APP_GOOGLE_API_KEY}`)
			.then(({ data }) => {
				// variant 3개이상인 녀석만 가져옴
				const googleFonts = data.items.filter(item => item.variants.length >= 3).map((item) => {
					const filteredVariants = item.variants.filter(variant => variant.indexOf('italic') === -1)
					// Create a copy of the item (rather than modifying the original data),
					// but substitute the variants array with the filtered variants
					return { ...item, variants: filteredVariants }
				})
				.filter(item => {
					if(item.family !== 'Noto Serif HK') {
						const regularPosition = item.variants.indexOf('regular')
						return regularPosition > 0 && regularPosition < item.variants.length - 1
					}
				})
				// let list = [];
				// googleFonts.filter((item) => {
				// 	if(item.family !== 'Noto Serif HK') {
				// 		// let regularPosition = item.variants.indexOf('regular')
				// 		// // list.push({ ...item, variants: item.variants[regularPosition -1]})

				// 		// // list.push({ ...item, variants: item.variants[regularPosition +1]})
				// 		// list.push({ ...item, variants: item.variants[regularPosition]})
				// 	}
				// });
				return googleFonts;
			}).catch((err) => {
				if (!axios.isCancel(err)) {
					console.log('Error ', err.message)
				}
			});
}

  export { getGoogleFonts };