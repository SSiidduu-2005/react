import '../../CSS/Index.css'
function Index(){
    return(
        <>
        <div className='main2'>
            <div className='pi'>Popular Cricketers</div> <br />

            <div className='img'>
                <div ><img src="msd.jpg" alt="MSD" width={"350em"} height={"400em"}/>
                    <br />
                    <p>Ms Dhoni (2004-2019)</p>
                </div>
                <div ><img src="virat.webp" alt="VK" width={"350em"} height={"400em"} />
                <br />
                <p>V Kohli (2010)</p>
                </div>
                <div><img src="rohit.jpg" alt="RS"  width={"350em"} height={"400em"}/>
                <br />
                <p>R Sharma (2007)</p>
                </div>
                <div><img src="HP.jpg" alt="HP"  width={"350em"} height={"400em"}/>
                <br />
                <p>H pandeya (2015)</p>
                </div>
            </div>
            <br /><br />
            
                <div className='pi'>Popular places</div><br /><br />
                <div className='img2'>
                <div ><img src="hyd.jpg" alt="Not load"  width={"350em"} height={"300em"}/>
                <br />
                <p>Hyderabad</p>
                </div>
                <div ><img src="del.jpg" alt="Not load"  width={"350em"} height={"300em"}/>
                                <br />
                <p>Delhi</p>
                </div>
                <div ><img src="mi.jpg" alt="Not load"  width={"350em"} height={"300em"}/>
                                <br />
                <p>Mumbai</p>
                </div>
                 <div ><img src="b.webp" alt="Not load"  width={"350em"} height={"300em"}/>                <br />
                <p>Banglore</p></div>
            </div>
            <br /><br />

                <div className='pi'>Popular <Cars></Cars></div><br /><br />
                <div className='img3'>
                <div ><img src="audi.jpg" alt="Not load"  width={"350em"} height={"300em"}/>
                <br />
                <p>Audi</p>
                </div>
                <div ><img src="abz.jpg" alt="Not load"  width={"350em"} height={"300em"}/>
                                <br />
                <p>abz</p>
                </div>
                <div ><img src="benz.jpg" alt="Not load"  width={"350em"} height={"300em"}/>
                                <br />
                <p>benz</p>
                </div>
                 <div ><img src="car.jpg" alt="Not load"  width={"350em"} height={"300em"}/>                <br />
                <p>monterey</p></div>
            </div>

        </div>
        </>
    );
}

export default Index;