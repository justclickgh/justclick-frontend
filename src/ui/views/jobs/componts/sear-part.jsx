import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
import '../styles/couresel.css'


const jobs = [
  {
    id:1,
    title:"Ui/Ux design"
  },
    {
    id:1,
    title:"Mobile App"
  },
    {
    id:1,
    title:"Design"
  },
    {
    id:1,
    title:"Ui/Ux design"
  },  {
    id:1,
    title:"Ui/Ux design"
  }
]

const searchResult = (query) => {
  // return new Array(getRandomInt(5))
  //   .join('.')
  //   .split('.')
  //   .map((item, idx) => {
  //     const category = `${query}${idx}`;
  //     return {
  //       value: category,
  //       label: (
  //         <div
  //           style={{
  //             display: 'flex',
  //             justifyContent: 'space-between',
  //           }}
  //         >
  //           <span>
  //             Found {query} on{' '}
  //             <a
  //               href={`https://s.taobao.com/search?q=${query}`}
  //               target="_blank"
  //               rel="noopener noreferrer"
  //             >
  //               {category}
  //             </a>
  //           </span>
  //           <span>{getRandomInt(200, 100)} results</span>
  //         </div>
  //       ),
  //     };
  //   });

  return jobs.filter(item=>item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())).map((item,index)=>

{
  return {
    value :item,
    label:(
                  <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
              <p> {`${index} ${item.title}  `} </p>

            
            {/* <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span> */}
          </div>
    )
  }
}
  )

  }



const SearchPart = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    console.log("hfdfdfdf");
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  return (
      <div className="bg-light">

     
    <div className="search-part container py-4 push ">
        <div className="label-part mr-3 mt-2 ">
        {/* <h4>Seach For Projects</h4> */}
        </div>

        <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
    
      <Input.Search style = {{width:"300px"}} size="large" placeholder="Search For Project"/>
    </AutoComplete>
    
    </div>
    </div>
  );
};

export default SearchPart