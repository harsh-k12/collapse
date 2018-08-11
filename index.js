$(document).ready(()=>{
	$("#div1").hide()
	$("#div2").hide()
	$("#div3").hide()

        let temp1=0
        let temp2=0
        let temp3=0
		

    $("#col1").click(()=>{
		if(temp1==0)
        {
            $("#div1").show()
         	temp1=1
 			$("#div2").hide()
			temp2=0
            $("#div3").hide()
			temp3=0
        }
        else
        {
            $("#div1").hide()
            temp1=0
     	}
    })

		
    $("#col2").click(()=>{
        if(temp2==0)
        {
          	$("#div2").show()
       		temp2=1
       		$("#div1").hide()
	        temp1=1
    		$("#div3").hide()
			temp3=0
 		}
     	else
        {
     		$("#div2").hide()
     		temp2=0
     	}
	})

		
    $("#col3").click(()=>{
        if(temp3==0)
        {
          	$("#div3").show()
       		temp3=1
       		$("#div1").hide()
	        temp1=1
    		$("#div2").hide()
			temp2=0
 		}
     	else
        {
     	$("#div3").hide()
     	temp3=0
     	}
	})

})

