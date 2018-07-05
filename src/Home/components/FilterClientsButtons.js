import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {
  map,
  flatten,
  uniq,
  compact,
} from 'lodash';
import autoBind from 'react-autobind';

import {
  Button,
  CenterContainer,
} from '../styles';

const Wrapper = styled.div`
  margin-bottom: 60px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  margin-bottom: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex: 1;
  padding-bottom: 10px;

  overflow-x: scroll;

  /* width */
  ::-webkit-scrollbar {
      width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      background: #888;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #0097a7;
  }
`;

const FilterButtonComponent = styled(Button)`
  margin-right: 10px;

  min-width: 124px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  border: 1px solid #0097a7;

  ${({ isOff }) => isOff && css`
    background-color: transparent;
    color: black;
  `})
`;

const Title = styled.strong`
  min-width: 100px;
  margin-right: 20px;
`;

class FilterButton extends Component {
  constructor() {
    super();
    autoBind(this);
  }

  onClick() {
    const {
      tag,
      type,
      onClick,
    } = this.props;
    onClick(type, tag);
  }

  render() {
    const { tag, isOff } = this.props;
    return (
      <FilterButtonComponent onClick={this.onClick} isOff={isOff}>
        {tag}
      </FilterButtonComponent>
    )
  }
}

export default class FilterClientsButtons extends Component {
  extractTagList(clients, field) {
    return compact(uniq(flatten(map(clients, field))));
  }

  render() {
    const {
      clients,
      filterClients,
      clientFilters,
    } = this.props;

    if(!clientFilters || !clients) {
      return (
        <div>Loading...</div>
      );
    }

    const tags = this.extractTagList(clients, 'tags');
    const tech = this.extractTagList(clients, 'tech');

    const filtersOn = {
      tag: !!clientFilters.tag.length,
      tech: !!clientFilters.tech.length,
    };

    return (
      <Wrapper>
        <CenterContainer>
          <Container>
            <Title>
              Filter by Type:
            </Title>

            <ButtonsContainer>
              {tags.map(tag => (
                <FilterButton
                  key={tag}
                  tag={tag}
                  type="tag"
                  isOff={filtersOn.tag && !clientFilters.tag.includes(tag)}
                  onClick={filterClients}
                />
              ))}
            </ButtonsContainer>
          </Container>

          <Container>
            <Title>
              Filter by Tech:
            </Title>

            <ButtonsContainer>
            {tech.map(tag => (
              <FilterButton
                key={tag}
                tag={tag}
                type="tech"
                isOff={filtersOn.tech && !clientFilters.tech.includes(tag)}
                onClick={filterClients}
              />
            ))}
            </ButtonsContainer>
          </Container>
        </CenterContainer>
      </Wrapper>
    );
  }
}
