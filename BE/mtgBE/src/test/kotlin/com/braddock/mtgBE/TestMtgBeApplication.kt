package com.braddock.mtgbe

import org.springframework.boot.fromApplication
import org.springframework.boot.with


fun main(args: Array<String>) {
    fromApplication<MtgBeApplication>().with(TestcontainersConfiguration::class).run(*args)
}
