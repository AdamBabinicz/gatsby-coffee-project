import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati illo vero placeat quia sit qui ab incidunt, totam
              deserunt maiores dicta tenetur, culpa facere possimus laborum
              veniam distinctio. Vel soluta odio sit, minima fugit voluptas
              quos, minus unde amet dolorem in. Alias tempore iste magnam odio
              blanditiis ab vel quidem. Excepturi aut, totam corporis veniam
              quidem hic odio aliquid nobis ratione cupiditate aliquam molestiae
              nam tenetur sit ducimus, dolores ab? Magnam ea suscipit
              praesentium odio, optio facilis similique reiciendis dolore
              aspernatur sunt tempore voluptas in pariatur earum vero dicta
              aliquid voluptate, fuga mollitia quae dolor vel! Similique ab
              quidem est.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
