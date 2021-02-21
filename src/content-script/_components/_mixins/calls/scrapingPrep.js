// This basically probes the target page for what its maximum page size is...
// Then it probes the page again with that page size...
// ...and returns the amount of pages on that

// Then you're ready to start scraping the pages at the same time.

export default {
  methods: {
    scrapingPrep: function(
      baseUrl,
      callbach,
      returnResponse,
      returnAfterFirstCall
    ) {
      const vue = this;
      waterfall(
        [
          function(callback) {
            let url = new Url( DOMPurify.sanitize(baseUrl) );
            url.query.ale = true;

            axios.get(url.toString()).then(function(response) {
              const audible = $($.parseHTML(response.data)).find("div.adbl-main");
              const pageSizeDropdown = audible.find('select[name="pageSize"]');
              const maxPageSize = pageSizeDropdown.length > 0 ? DOMPurify.sanitize(pageSizeDropdown.find("option:last").val()) : null;
              url.query.pageSize = maxPageSize;

              let obj = {};
              if (returnResponse) obj.response = response;
              obj.urlObj = url;

              if (!maxPageSize || maxPageSize < 50 || returnAfterFirstCall) {
                obj.pageNumbers = [1];
                obj.pageSize = maxPageSize;
                callback(true, obj);
              } else {
                callback(null, obj);
              }
            });
          },

          function(o, callback) {
            axios.get(o.urlObj.toString()).then(function(response) {
              const audible = $($.parseHTML(response.data)).find("div.adbl-main");
              const pagination = audible.find(".pagingElements");
              const pagesLength = pagination.length > 0 ? parseFloat( DOMPurify.sanitize(pagination.find(".pageNumberElement:last").data("value")) ) : 1;
              o.pageNumbers = _.range(1, pagesLength + 1);
              o.pageSize = o.urlObj.query.pageSize || null;
              callback(null, o);
            });
          }
        ],
        function(err, obj) {
          callbach(obj);
        }
      );
    }
  }
};
