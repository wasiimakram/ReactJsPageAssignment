import React from 'react'
import NumberCounter from 'number-counter';
export default function Counter() {
  return (
    <div>
        {/* <!-- Counters --> */}
        <section id="bg-counters" class="popular-course-area section-gap mb-40">
            <div class="container">
               <div class="row align-items-center text-center">
                  <div class="col-lg-3 col-md-3 col-sm-3 bottom10">
                     <div class="counters ensGreen top10 bottom20">
                        <span class="font-light"><i class="fa fa-users"></i>
                        </span>
                     </div>
                     
                     <div class="counters ensRed  top10 bottom10">
                        
                        <span class="count_nums font-light studentCounter"><NumberCounter end={1245} delay={4}/></span>
                     </div>
                     <h3 class="font-light ensGreen top20">Total Students</h3>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 bottom10">
                     <div class="counters ensGreen top10 bottom20">
                        <span class="font-light"><i class="fa fa-graduation-cap"></i></span>
                     </div>
                     <div class="counters ensRed top10 bottom10">
                        <span class="count_nums font-light graduateCounter"><NumberCounter end={1245} delay={4}/></span>
                     </div>
                     <h3 class="font-light ensGreen top20">Graduates</h3>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 bottom10">
                     <div class="counters ensGreen top10 bottom20">
                        <span class=" font-light"><i class="fa fa-user"></i></span>
                     </div>
                     <div class="counters ensRed top10 bottom10">
                        <span class="count_nums font-light staffCounter"><NumberCounter end={1245} delay={4}/></span>
                     </div>
                     <h3 class="font-light ensGreen top20">Total Staff</h3>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 bottom10">
                     <div class="counters ensGreen top10 bottom20">
                        <span class="font-light"><i class="fa fa-building"></i></span>
                     </div>
                     <div class="counters ensRed top10 bottom10">
                        <span class=" count_nums font-light campusCounter"><NumberCounter end={1245} delay={4}/></span>
                     </div>
                     <h3 class="font-light ensGreen top20">Campuses</h3>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Counters ends--> */}
    </div>
  )
}
