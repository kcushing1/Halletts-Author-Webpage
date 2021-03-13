import React from "react";
import Col from "../../../utils/Col";
import Row from "../../../utils/Row";
import "./books.css";
import { FaAmazon } from "react-icons/fa";
import Button from "../../../utils/Button";
import FadeDiv from "../../../utils/FadeInDown";

export default function Books() {
  return (
    <Row id="books">
      <div className="col-4 ">
        <FadeDiv>
          <img
            src="./images/handflower.jpg"
            alt="Book Cover Example"
            className="rounded book-img mb-4 align-middle"
          />
        </FadeDiv>
      </div>
      <div className="col mr-4">
        <FadeDiv>
          <Row>
            <Col>
              <h2>OUR BATHROOM MIRROR</h2>
              <p className="cursive">
                "This book is the total bomb dot com, yo" -Kasey
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="greytext">
                Martin Kemp has been working hard to be a good detective in a
                complicated city when one disastrous night leaves him struggling
                to manage PTSD. Relocating to a small seaside town where he can
                spend time piecing himself back together, Martin is glad to pick
                up work at a single-room PI agency where he is responsible for
                nothing more complicated than mitigating the townies’ misplaced
                gripes with one another. Yet Martin’s quiet days are interrupted
                when a string of arsons presents him with a case that is far too
                dire to leave alone. Tracking down an arsonist turns out to be
                the least of Martin’s troubles when he is woken one night to the
                sounds of a confused and frantic ghost going through the shelves
                of his bathroom cabinets. Unable to get rid of the ghost, Martin
                must resign himself to solving a case he never wanted any part
                in while an irritating ally rides shotgun on a search that leads
                them further and further across the country. The deeper they
                delve into the tangled threads of the investigation, the more
                people seem to be after them. Martin and Noé will have to learn
                to trust one another if they are going to survive but cracking
                the case will test more than their shaky friendship, it also
                means breaking down a growing secret of Martin’s own. A secret
                which, if revealed, may unravel Noé’s very existence.
              </p>
            </Col>
          </Row>
        </FadeDiv>
        <FadeDiv>
          <div className=" row mt-4">
            <Col>
              <p>
                We don't yet know the release date, but in the meantime find
                your next great read!
              </p>
            </Col>
          </div>
          <Row>
            <Col>
              <Button
                text="Amazon"
                className="btn border btn-retailer"
                href="https://www.amazon.com/best-sellers-books-Amazon/zgbs/books"
              />
              <Button
                text="B&N"
                className="btn border btn-retailer"
                href="https://www.barnesandnoble.com/b/books/_/N-1fZ29Z8q8"
              />
              <Button
                text="Kobo"
                className="btn border btn-retailer"
                href="https://www.kobo.com/us/en/list/kwlbestsellers/2Kasy_Zqd0yBuwFlAL8Lbg"
              />
              <Button
                text="IndeBound"
                className="btn border btn-retailer"
                href="https://www.indiebound.org/"
              />
            </Col>
          </Row>
        </FadeDiv>
      </div>
    </Row>
  );
}
