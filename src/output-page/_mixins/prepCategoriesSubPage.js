import slugify from "./slugify";
export default {
  mixins: [slugify],
  methods: {
    prepCategoriesSubPage: function(book) {
      if (this.$route.name === "category") {
        
        const vue = this;
        console.log(this.$route.params);
        const category = {
          parent: this.$route.params.parent,
          child: this.$route.params.child,
          book: this.$route.params.query
        };
        
        let categoryBooks = _.filter( this.$store.state.library.books, function( book ) {
          if ( book.categories ) {
            const cat = vue.slugify( book.categories[0].name );
            const kitten = vue.slugify( book.categories[1].name );
            if ( category.parent === cat && category.child === kitten ) {  return true; }
            else if ( category.parent === cat ) { return true; }
          }
        });
        
        // Init arrays
        this.$store.commit("prop", { key: 'pageCollection', value: categoryBooks });
        this.collectionSource = 'pageCollection';
        
      }
    }
  }
};
