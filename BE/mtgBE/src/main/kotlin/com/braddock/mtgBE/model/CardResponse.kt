package com.braddock.mtgbe.model

sealed class CardResponse {
    data class Success(val card: Card) : CardResponse()
    data class Error(val message: String) : CardResponse()
}

sealed class CardNameResponse {
    data class Success(val name: String) : CardNameResponse()
    data class Error(val message: String) : CardNameResponse()
}