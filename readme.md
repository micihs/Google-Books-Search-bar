## Google-Book-Search

A Prebuilt Search bar for searching the Google Books databse.

## Prerequisites

Get an API key from Google Developer Console.
https://console.developers.google.com

Generate an API key and enable the Google Books API.

## Usage

```js
import {BookSearchBar} from 'react-native-books-search-bar';
```

Basic usage of BookSearchBar

```jsx
  <BookSearchBar
     apikey={"API KEY FROM DEVELOPER CONSOLE"}
     onResultPress={(book)=> console.log(book)}
  />
```
calling onResultPress will package the results of the API call into the listed book details below.

```js
     {
           id:'id of book',
           title:'name of the book',
           authors:['array of authors'],
           isbn:['isbn types'],
           raw:{}
      }
```

The BookSearch module can be used as an API if you would rather custom build your own styles/ UI components.

```js
import {BookSearch} from 'react-native-google-books';
```

```js
  async getCaclulusBooks(){
    let books = await BookSearch.searchbook("Caclulus","API_KEY");
  }
```

```js
  //Response of this request
  {
    status:true,
    code:200,
    data:[{}]
  }
```


## Props Example


```jsx
<GoogleBookSearch                    
    apikey={"API KEY"}
    value={"Search value/ text input of search bar"}
    searchContainerStyle={{marginTop:32}}
    searchInputStyle={{fontSize:16}}
    resultContainerStyle={{padding:4}}
    resultItemStyle={{color:'blue'}}
    interval={300}
    searchResult={(result) => console.log(result)}                
    onResultPress={(book)=> console.log(book)} ///callback for the search bar
/>
```