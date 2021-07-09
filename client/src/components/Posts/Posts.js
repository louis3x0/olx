import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  InnerPost,
  PostItem,
  PostItems,
  PostsContainer,
  PostUl,
  Text,
  Image,
} from "./styles";

const Posts = () => {
  return (
    <PostsContainer>
      <Container>
        <Text>
          <h2>Anunturi promovate</h2>
        </Text>

        <PostItems>
          <PostItem>
            <Link to="/">
              <Image
                className="imagine"
                src="https://frankfurt.apollo.olxcdn.com:443/v1/files/neghlw7k6f9f3-RO/image;s=644x461"
              />
            </Link>
            <InnerPost>
              <h4>
                <Link to="/">
                  Bratara Aur 14 K model nou unisex ARJEWELS(AR3338)
                </Link>
              </h4>
            </InnerPost>
            <PostUl>
              <li>Bucuresti, Sectorul 2</li>
              <li>Ieri 23:29</li>
            </PostUl>
            <span>249 lei</span>
          </PostItem>
          <PostItem>
            <Link to="/">
              <Image
                className="imagine"
                src="https://frankfurt.apollo.olxcdn.com:443/v1/files/neghlw7k6f9f3-RO/image;s=644x461"
              />
            </Link>
            <InnerPost>
              <h4>
                <Link to="/">
                  Bratara Aur 14 K model nou unisex ARJEWELS(AR3338)
                </Link>
              </h4>
            </InnerPost>
            <PostUl>
              <li>Bucuresti, Sectorul 2</li>
              <li>Ieri 23:29</li>
            </PostUl>
            <span>249 lei</span>
          </PostItem>
          <PostItem>
            <Link to="/">
              <Image
                className="imagine"
                src="https://frankfurt.apollo.olxcdn.com:443/v1/files/neghlw7k6f9f3-RO/image;s=644x461"
              />
            </Link>
            <InnerPost>
              <h4>
                <Link to="/">
                  Bratara Aur 14 K model nou unisex ARJEWELS(AR3338)
                </Link>
              </h4>
            </InnerPost>
            <PostUl>
              <li>Bucuresti, Sectorul 2</li>
              <li>Ieri 23:29</li>
            </PostUl>
            <span>249 lei</span>
          </PostItem>
          <PostItem>
            <Link to="/">
              <Image
                className="imagine"
                src="https://frankfurt.apollo.olxcdn.com:443/v1/files/neghlw7k6f9f3-RO/image;s=644x461"
              />
            </Link>
            <InnerPost>
              <h4>
                <Link to="/">
                  Bratara Aur 14 K model nou unisex ARJEWELS(AR3338)
                </Link>
              </h4>
            </InnerPost>
            <PostUl>
              <li>Bucuresti, Sectorul 2</li>
              <li>Ieri 23:29</li>
            </PostUl>
            <span>249 lei</span>
          </PostItem>
        </PostItems>
      </Container>
    </PostsContainer>
  );
};

export default Posts;
