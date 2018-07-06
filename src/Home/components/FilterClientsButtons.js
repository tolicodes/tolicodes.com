import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {
  chain,
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
  flex-direction: column;

  align-items: center;
  margin-bottom: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
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
    cursor: pointer;
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
  margin-bottom: 10px;
`;

export const FILTER_TYPES = {
  tech: 'Tech',
  tag: 'Type',
  industry: 'Industry',
};

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
  extractTagList(clients, filterType) {
    return (
      chain(clients)
        .map(filterType)
        .flatten()
        .compact()
        .countBy()
        .toPairs()
        .sortBy(([, count]) => -count)
        .map(([tag]) => tag)
        .value()
    );
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

    return (
      <Wrapper>
        <CenterContainer>
          {
            Object.entries(FILTER_TYPES).map(([filterType, label]) => (
              <Container key={filterType}>
                <Title>
                  Filter by {label} (Scroll):
                </Title>

                <ButtonsContainer>
                  {this.extractTagList(clients, filterType).map(tag => (
                    <FilterButton
                      key={tag}
                      tag={tag}
                      type={filterType}
                      isOff={(
                        clientFilters[filterType].length &&
                        !clientFilters[filterType].includes(tag)
                      )}
                      onClick={filterClients}
                    />
                  ))}
                </ButtonsContainer>
              </Container>
            ))
          }
        </CenterContainer>
      </Wrapper>
    );
  }
}
