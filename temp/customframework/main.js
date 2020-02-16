var navflag=0;
function navclick()
{
    if(navflag==0)
    {
        document.getElementById("plcr").style="transform: rotate(405deg);";
        navflag=1;
    }
    else
    {
        document.getElementById("plcr").style="transform: rotate(0deg);";
        navflag=0;
    }
}