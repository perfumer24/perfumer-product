---
name: User story
about: This template provides a basic structure for user story issues.
title: '"<사용자 유형>으로서, <목표>를 이루고 <이점>을 누리고 싶어요.'
labels: 'User story, MoSCoW: S, Risk: M, Biz Value: M'
assignees: ''
---

### 사용자 스토리

**As** a <type of user>,
**I want** to <a goal>
**So that** <benefit>.

## 인수 테스트

```gherkin=
Feature: 회원가입 기능 추가

  Scenario: 사용자는 원하는 계정으로 가입할 수 있다.
    Given 사용자가 아이디와 비밀번호를 입력
    When 중복된 계정이 없을 경우
    Then 로그인 페이지로 이동 후 가입 성공 메시지를 보여준다.
```

```gherkin=
기능: 회원가입 기능 추가

  시나리오: 사용자는 원하는 계정으로 가입할 수 있다.
    조건 사용자가 아이디와 비밀번호를 입력
    만약 중복된 계정이 없을 경우
    그러면 로그인 페이지로 이동 후 가입 성공 메시지를 보여준다.
```

## 디자인

- Handoff

## 하위 작업

_사용자 스토리를 달성하기 위한 체크리스트 또는 하위 작업_

- [ ] 하위 테스크 1
- [ ] 하위 테스크 2
