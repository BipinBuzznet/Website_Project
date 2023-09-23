/* Function for incresing the counter for the product page */

function increment()
    {
        var element = document.getElementById('total1');
        var value = element.innerHTML;
        ++value;
        document.getElementById('total1').innerHTML = value;
        
    }
    /* Function for decresing the counter for the product page */
    function decerement()
    {
        var element = document.getElementById('total1');
        var x = element.innerHTML;
        if(x <= 0)
        {
            document.getElementById('total1').innerHTML = 0;
        }
        else
        {
            --x;
            document.getElementById('total1').innerHTML = x;
        }
    }
    /* Function for incresing the counter for the product page */
    function increment1()
    {
        var element = document.getElementById('total2');
        var value = element.innerHTML;
        
        ++value;
        document.getElementById('total2').innerHTML = value;
    }
    /* Function for decresing the counter for the product page */
    function decerement1()
    {
        var element = document.getElementById('total2');
        var x = element.innerHTML;
        if(x <= 0)
        {
            document.getElementById('total2').innerHTML = 0;
        }
        else
        {
            --x;
            document.getElementById('total2').innerHTML = x;
        }
    }
    /* Function for incresing the counter for the product page */
    function increment2()
    {
        var element = document.getElementById('total3');
        var value = element.innerHTML;
        
        ++value;
        document.getElementById('total3').innerHTML = value;
    }
    /* Function for decresing the counter for the product page */
    function decerement2()
    {
        var element = document.getElementById('total3');
        var x = element.innerHTML;
        if(x <= 0)
        {
            document.getElementById('total3').innerHTML = 0;
        }
        else
        {
            --x;
            document.getElementById('total3').innerHTML = x;
        }
    }
    /* Function for incresing the counter for the product page */
    function increment3()
    {
        var element = document.getElementById('total4');
        var value = element.innerHTML;
        
        ++value;
        document.getElementById('total4').innerHTML = value;
    }
    /* Function for decresing the counter for the product page */
    function decerement3()
    {
        var element = document.getElementById('total4');
        var x = element.innerHTML;
        if(x <= 0)
        {
            document.getElementById('total4').innerHTML = 0;
        }
        else
        {
            --x;
            document.getElementById('total4').innerHTML = x;
        }
    }
    /* Function for the total number of books that has been added */
    function added()
    {
        var element = document.getElementById('total1');
        var element1 = document.getElementById('total2');
        var element2 = document.getElementById('total3');
        var element3 = document.getElementById('total4');
        var x = Number(element.innerHTML) + Number(element1.innerHTML) + Number(element2.innerHTML) + Number(element3.innerHTML);
        if( x == 0 )
        {
            alert("Please Select The Amount Of Book!")
        }
        else
        {
            alert("Your "+ x +"  Books Has Been Added To Cart!");
        }
    }