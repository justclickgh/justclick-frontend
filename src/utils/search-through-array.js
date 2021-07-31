 export   const searchthroughArray =(list = [],search_string = String()) =>{
        let is_true = false

        list.map(item =>{
            if (item.toLowerCase().includes(search_string.toLowerCase()) ){
                is_true = true
            }
            return is_true
        })
        return is_true

    }