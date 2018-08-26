
   (function () {
    // Get tagged objects
       var $course = $('#classes .card');
       var dataTag = {};
       var dataTag1 = {};
       var $filterLink = $('#filterMenu li ul li a');
       var $showAll = $('#showAll');
       var $sectionTitle = $('.sectionTitle');
       var $hiddenSecTitle = $('h2.hidden');

//Hide .hidden Section Titles
        $hiddenSecTitle.hide();
        console.log($sectionTitle);
        console.log($hiddenSecTitle);
//Get Course Data-tages
       $course.each(function (){
        var img= this;
        var tags = $(this).data('tags');
    
        if (tags){
            tags.split(',').forEach(function(tagName){
                if(dataTag[tagName] == null){
                    dataTag[tagName] = [];
                }
                dataTag[tagName].push(img);
            });
        }
       });
//Get Section Title Data-tages
 $sectionTitle.each(function (){
        var a= this;
        var tags1 = $(this).data('tags');
    
        if (tags1){
            tags1.split(',').forEach(function(tagName){
                if(dataTag1[tagName] == null){
                    dataTag1[tagName] = [];
                }
                dataTag1[tagName].push(a);
            });
        }
       });
//Show All Function 
       $showAll.click(function(){
        $sectionTitle.fadeIn('slow');
        $course.fadeIn('slow');
        $hiddenSecTitle.hide();
       });
//Sort - Hide - Show Courses 
       $.each(dataTag, function(tagName){
        $filterLink.click(function(){
           var $this = $(this).data('tags');
            $course.fadeOut('slow', function(){
                $(this).filter(dataTag[$this]).fadeIn('slow'); 
            });
           }
         );
        });
//Sort - Hide - Show Section Titles 
        $.each(dataTag1, function(tagName){
            $filterLink.click(function(){
               var $this = $(this).data('tags');
                $sectionTitle.fadeOut('slow', function(){
                    $(this).filter(dataTag1[$this]).fadeIn('slow'); 
                });
               }
             );
            });
        
       
    }());

 