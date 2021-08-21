
function Footer () {
    return (
        <div class="featurette p-3" id = "Contact">
        <div>
          <ul class="list_contact">
            <li class="inline_contact">
                <a href= "tel:859-321-5480" class= "contact_item_format"> <i class="fas fa-phone-square"></i> </a>
            </li>
            <li class="inline_contact">
                <a class= "contact_item_format" href= "mailto:nolana464@gmail.com"><i class="fas fa-envelope-open-text"></i></a>
            </li>
            <li class="inline_contact">
                <a class = "contact_item_format" href = "https://github.com/aanolan51" target="_blank"> <i class="fab fa-github-square"></i> </a>
            </li> 
            <li class="inline_contact">
                <a class= "contact_item_format" href= "https://www.linkedin.com/in/alyssa-nolan-07206b16/" target="_blank"><i class="fab fa-linkedin"></i></a>
            </li>                    
          </ul>
         
        </div> 
        <div  class = "d-flex justify-content-center mb-5">
          <a class = "toplink" href="#top">Back to Top</a>             
        </div>           
    </div>
    );
};

export default Footer