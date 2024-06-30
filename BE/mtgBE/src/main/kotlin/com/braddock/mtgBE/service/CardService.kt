package com.braddock.mtgbe.service

import com.braddock.mtgbe.model.Card
import com.braddock.mtgbe.model.CardNameResponse
import com.braddock.mtgbe.model.CardResponse
import com.braddock.mtgbe.repository.CardRepository
import org.springframework.stereotype.Service

@Service
class CardService(private val cardRepository: CardRepository) {

    fun getAllCards(): List<Card> = cardRepository.findAll()

    fun getCardById(id: Long): Card? = cardRepository.findById(id).orElse(null)

    fun getCardByName(name: String): Card? = cardRepository.findByName(name)

    fun createCard(card: Card): CardResponse {
        val existingCard = cardRepository.findByName(card.name)
        return if (existingCard == null) {
            CardResponse.Success(cardRepository.save(card))
        } else {
            CardResponse.Error("A card with the name '${card.name}' already exists.")
        }
    }

    fun updateCard(name: String, card: Card): Card? {
        val existingCard = cardRepository.findByName(name)

        if (existingCard != null) {
            card.id = existingCard.id
            return cardRepository.save(card)
        }
        return null
    }

    fun deleteCard(name: String): CardNameResponse {
        val existingCard = cardRepository.findByName(name)

        return if (existingCard != null) {
            cardRepository.delete(existingCard)
            CardNameResponse.Success("Card with name '$name' was deleted.")
        } else {
            CardNameResponse.Error("Card with name '$name' was not found.")
        }
    }
}
