class SearchSuggestionSystem {
    /**
     * @param {string[]} products
     */
    constructor(products) {
        this.products = products.sort();
    }

    /**
     * @param {string} searchWord
     * @return {string[][]}
     */
    getSuggestions(searchWord) {
        const result = [];
        let prefix = "";

        for (let i = 0; i < searchWord.length; i++) {
            prefix += searchWord[i];
            const currentSuggestions = [];

            for (const product of this.products) {
                if (product.startsWith(prefix)) {
                    currentSuggestions.push(product);
                    if (currentSuggestions.length === 3) {
                        break;
                    }
                }
            }
            result.push(currentSuggestions);
        }
        return result;
    }
}

